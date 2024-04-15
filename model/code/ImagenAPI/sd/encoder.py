import torch
from torch import nn
from torch.nn import functional as F
from decoder import VAE_AttentionBlock, VAE_ResidualBlock


class VAE_Encoer(nn.Sequential):
    def __init__(self):
        super().__init__(
            # (Batch_size, Channel, Height, Width) -> (Batch_Size, 128, Height, Width)
            nn.Conv2d(3, 128, kernel_size=3, padding=1),

            # (Batch_Size, 128, Height, Width) -> (Batch_Size, 128, Height, Width)
            VAE_ResidualBlock(128, 128),

            # (Batch_Size, 128, Height, Width) -> (Batch_Size, 128, Height, Width)
            VAE_ResidualBlock(128, 128),

            # (Batch_Size, 128, Height, Width) -> (Batch_Size, 128, Heigth / 2, Width / 2)
            nn.Conv2d(128, 128, kernel_size=3, stride=2, padding=0),


             # (Batch_Size, 128, Heigth / 2, Width / 2) -> (Batch_Size, 256, Heigth / 2, Width / 2)

            VAE_ResidualBlock(128, 256),


            VAE_ResidualBlock(256, 256),
            # (Batch_Size, 128, Height / 2, Width / 2) -> (Batch_Size, 128, Heigth / 4, Width / 4)

            nn.Conv2d(256, 256, kernel_size=3, stride=2, padding=0),
            
            VAE_ResidualBlock(256, 512),

            VAE_ResidualBlock(512, 512),

            nn.Conv2d(512, 512, kernel_size=3, stride=2, padding=0),

            VAE_ResidualBlock(512, 512),
            VAE_ResidualBlock(512, 512),
            VAE_ResidualBlock(512, 512),
            
            VAE_AttentionBlock(512),

            VAE_ResidualBlock(512, 512),

            # Normalization
            nn.GroupNorm(32, 512),


            nn.SiLU(),

            nn.Conv2d(512, 8, kernel_size=3, padding=1),

            nn.Conv2d(8, 8, kernel_size=1, padding=0)
        )

    def forward(self, x: torch.tensor, noise: torch.Tensor) -> torch.Tensor:
            # x: (Batch_Size, Channel, Height, Width)
            # noise: (Batch_Size, Out_Channgels, Height / 8, Width / 8) -> The same as the output of the code above

            for module in self: # for every layer in the self -> the above code
                if getattr(module, 'stride', None) == (2, 2):

                    # (Padding_Left, Padding_Right, Padding_Top, Padding_Bottom) -> make it symetrical
                    x = F.pad(x, (0, 1, 0, 1))
                x = module(x)
            
            # (Batch_Size, 8, Height / 8, Widht / 8) -> two tensors of shape (Batch_Size, 4, Height / 8, Width / 8) on the first dimension
            mean, log_variance = torch.chunk(x, 2, dim = 1)
            
            # If the variance is too small to make it between -30 - 20
            log_variance = torch.clamp(log_variance, -30, 20)

            variance = log_variance.exp()

            stdev = variance.sqrt()

            # N(0, 1) -> N(mean, variance)

            x = mean + stdev * noise

            # Scale the output by a constant

            x *= 0.18215

            return x











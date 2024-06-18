import { BannerContainer, BannerContent, BannerDescription, BannerImage, BannerShopButton, BannerTitle } from "../../styles/banner";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Typography } from "@mui/material";
import { Colors } from "../../styles/theme";

export default function Banner(){
    const theme=useTheme()

    const matches=useMediaQuery(theme.breakpoints.down("md"));
    return(
        <BannerContainer>
            <BannerImage src="/images/banner/banner.png"></BannerImage>
            <BannerContent>
                <Typography variant="h6"> </Typography>
                <BannerTitle variant="h2">
                    
                </BannerTitle>
                <BannerDescription variant="subtitle">
                   
At our Pawprint Pet Clinic, we treat your pets like family, offering compassionate, comprehensive care with a personal touch. Visit us for top-notch veterinary services that keep your furry friends happy and healthy!
                    
               
                </BannerDescription>
                <BannerShopButton background="" color="primary">BOOK NOW</BannerShopButton>
            </BannerContent>
            
        </BannerContainer>
       
    )
}

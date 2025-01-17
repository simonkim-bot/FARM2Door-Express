import { useDispatch, useSelector } from 'react-redux';
import { Badge, Box, IconButton } from "@mui/material";
import {
    PersonOutline,
    ShoppingBagOutlined,
    MenuOutlined,
    SearchOutlined
} from '@mui/icons-material';

import { useNavigate } from 'react-router-dom';
import { shades } from "../../theme";
import { setIsCartOpen } from '../../state';


const Navbar =()=>{
     const  navigate = useNavigate();
     const dispatch = useDispatch();
     //there are duplicate  carts here cause we are grabbing the slice and the state cart in indexjs in state
     const cart = useSelector((state) => state.cart.cart);
     
    return (
    <Box   
        display="flex"
        alignItems="center"
        width="100%"
        height="60px"
        backgroundColor="rgba(255, 255, 255, 0.95)"
        color="black"
        position="fixed"
        top="0"
        left="0"
        zIndex="1"
    >
        <Box
            width="80%"
            margin="auto"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
        >
            <Box
                onClick={() => navigate("/")}
                sx={{'&:hover':{cursor: "pointer"}}}
                color={shades.secondary[500]}
            >FARM2Door</Box>
            <Box
                display="flex"
                justifyContent="space-between"
                columnGap="20px"
                zIndex="2"
            >
                <IconButton sx={{color: "black"}}>
                    <SearchOutlined/>
                </IconButton>

                <IconButton sx={{color: "black"}}>
                    <PersonOutline/>
                </IconButton>
                <Badge
                    badgeContent={cart.lenght}
                    color="secondary"
                    invisible = {cart.lenght === 0}
                    sx={{
                        "& .MuiBadge-badge":{
                            right: 5,
                            top: 5,
                            padding: "14px",
                            minWidth: "13px",
                        },
                    }}
                >
                    <IconButton 
                    // so once you have a payload that empty the setIsCartOpen does not have an action hence the epmty object{}
                        onClick={() => dispatch(setIsCartOpen({}))}
                        sx={{color: "black"}}>
                        <ShoppingBagOutlined/>
                    </IconButton>
                </Badge>
                <IconButton sx={{color: "black"}}>
                    <MenuOutlined/>
                </IconButton>

            </Box>

        </Box>

    </Box>
    );
};
 export default Navbar;

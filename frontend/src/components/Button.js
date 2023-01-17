import { Button } from "@mui/material";

export default function CustButton (customHeight, customWidth, colorChosen, action, text) {

    return(
        <Button
            sx={{
                height: customHeight || 50,
                width: customWidth || 150,
            }}
            variant="contained"
            size="large"
            color={colorChosen}
            onClick={action}
            style={{borderRadius:25}}
        >
            {text}
        </Button>
    )
}
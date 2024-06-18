import { Box } from "@mui/material";
import React from "react";
import Styles  from "./CardsEvents.module.css";

interface CardConfig {
    numeroCard: string;
    tituloCard: string;
    textoCard: string;
    imgCard: string
}

export const CardEvents: React.FC<CardConfig> = ({ numeroCard, tituloCard, textoCard, imgCard }) => {
    return (

        <Box 
        sx={{
            height: '400px',
            display: 'flex',
            flexWrap: 'nowrap',
            justifyContent: 'start',
        }}>
            <input type="radio" name="slide" className={Styles.InputCard} id={numeroCard} />
            <label htmlFor={numeroCard} className={Styles.LabelCard}
                style={{
                    backgroundImage: `url(${imgCard})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover'
                }}>
                <div className={Styles.RowCard}>
                    <div className={Styles.IconCard}>{numeroCard}</div>
                    <div className={Styles.DescCard}>
                        <h4>{tituloCard}</h4>
                        <p>{textoCard}</p>
                    </div>
                </div>
            </label>
        </Box>

    )
}
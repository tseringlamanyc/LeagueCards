import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

export default function SkinList({ champName, skins }) {
  return (
    <ImageList>
      {skins.map((skin) => (
        <ImageListItem key={skin.num}>
          <img
            src={`${`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champName}_${skin.num}.jpg`}?w=248&fit=crop&auto=format`}
            srcSet={`${`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champName}_${skin.num}.jpg`}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={skin.name}
            loading="lazy"
          />
          <ImageListItemBar title={skin.name} position="below" />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

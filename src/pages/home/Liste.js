import { Button, ListItem,ListItemText,Divider,IconButton, List } from "@mui/material"
import { Delete } from "@mui/icons-material"
import React from "react";

export default function Liste({harcamalar}) {
    console.log(harcamalar);

  return (
    <List>
        {harcamalar.map(harcama=>(
            <React.Fragment key={harcama.id}>
                <ListItem secondaryAction={
                    <IconButton edge="end" aria-label="delete">
                        <Delete/>
                    </IconButton>
                }>
                    <ListItemText primary={harcama.baslik} secondary={harcama.miktar}></ListItemText>
                    <Divider/>
                </ListItem>
            </React.Fragment>
        ))}
    </List>
  )
}

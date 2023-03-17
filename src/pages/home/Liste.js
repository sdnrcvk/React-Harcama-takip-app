import { Button, ListItem,ListItemText,Divider,IconButton, List } from "@mui/material"
import { Delete } from "@mui/icons-material"
import React, { useState } from "react";
import { useFirestore } from "../../hooks/useFirestore";

export default function Liste({harcamalar}) {
    console.log(harcamalar);
    const {belgeSil}=useFirestore("harcamalar")

  return (
    <List>
        {harcamalar.map(harcama=>(
            <React.Fragment key={harcama.id}>
                <ListItem secondaryAction={
                    <IconButton edge="end" aria-label="delete" onClick={()=>belgeSil(harcama.id)}>
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

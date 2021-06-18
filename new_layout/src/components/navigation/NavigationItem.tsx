import React from "react"
import { Typography } from "@material-ui/core"
import { makeStyles, Theme } from "@material-ui/core/styles"

interface NavigationItemProps {
  label: string
  link: string
}

const useStyles = makeStyles((theme: Theme) => ({
  item: {
    padding: 15,
    cursor: "pointer",
    margin: "0 10px",
  },
}))

const MenuItem = (props: NavigationItemProps) => {
  const classes = useStyles()
  return (
    <li className={classes.item}>
      <Typography component="a" variant="body1" href={props.link}>
        {" "}
        {props.label}{" "}
      </Typography>
    </li>
  )
}
export default MenuItem

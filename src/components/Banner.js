import React  from "react";
import classes from './Banner.module.scss';

function Banniere(props) {
return(
<div className={classes.Banner}>
<img className={classes.ban} src={props.imageUrl} alt="Banniere"/>
<h2 className={classes.BannerTexte}>
{props.text && <p>{props.text}</p>}
</h2>
</div>
)
}
export default Banniere;

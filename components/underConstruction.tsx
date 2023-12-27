import ConstructionIcon from '@mui/icons-material/Construction';

export default function UnderConstruction(){
    return (
        <div style={{backgroundColor:"yellow", margin:"1em 0em", padding:"0em 1em", color:"black", textAlign:"center"}}>
        <a style={{fontSize:"1.5em"}}><ConstructionIcon style={{margin:"1em 0.5em", width:"2em", height:"2em"}}/> This page is currently under construction! </a>
        </div>
    )
}
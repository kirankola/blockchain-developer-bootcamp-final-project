import {useEthers} from "@usedapp/core"
import {Button,makeStyles} from "@material-ui/core"
 
const useStyles=makeStyles((theme)=>({
    contanier:{
        padding:theme.spacing(4),
        display:"flex",
        justifyContent:"flex-end",
        gap:theme.spacing(1)
    }
}))
export const Header=()=>{
    const { activateBrowserWallet, account ,deactivate} = useEthers()
    const isConnected=account !== undefined
    const classes=useStyles()
   // console.log(isConnected,chainId)
    return (
        <div className={classes.contanier}>

        
        <div>
            {isConnected ?
            (<Button color="primary" variant="contained" onClick={deactivate}>disconnect</Button>):
            (<Button color="primary" variant="contained" onClick={activateBrowserWallet}>connect</Button>)
            }
        </div>
        </div>
    )
}
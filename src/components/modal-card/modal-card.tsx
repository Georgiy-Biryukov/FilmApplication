import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    display:'flex',
  },
  img: {
      height: '100%',
  },
  card_info: {
     padding:'30px',
     display: 'flex',
     flexDirection:'column',
  }

}));

const TransitionsModal =({data,open,handleClose}:any)=> {
   
  const classes = useStyles();

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <div className={classes.img}>
                <img alt="img" src={data.image && data.image.medium ? data.image.medium : ""}/>
            </div>
            <div className={classes.card_info}>
                {data.name && <p>name : {data.name}</p>}
                {data.language &&  <p>language : { data.language}</p>}
                {data.genres &&  <p>genres : { data.genres.toString()}</p>}
                {data && data.rating && data.rating.average && <p>rate : {data.rating.average}</p>}
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default TransitionsModal

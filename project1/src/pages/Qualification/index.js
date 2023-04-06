import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export default function Qualifications() {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', p: 3}}>
      <h1 className='mode'>Qualifications</h1>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Sree Chaitanya" src="https://img.collegedekhocdn.com/media/img/institute/logo/1434463349.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Sree Chaitanya Institute of Technological Sciences"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                65% CGPA
              </Typography>
              {" — BTECH in Electronics and Communication Engineering"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="ALPHORES" src="data:image/jpeg;base64,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" />
        </ListItemAvatar>
        <ListItemText
          primary="Alphores Junior College"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                77% CGPA
              </Typography>
              {" — Intermediate studies in MPC"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt=" PARADISE" src="data:image/jpeg;base64,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"/>
        </ListItemAvatar>
        <ListItemText
          primary="Paradise High School"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                82% CGPA
              </Typography>
              {' — Higher Secondory Education'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardAction from '@mui/material/CardActionArea'
import { Link } from 'react-router-dom';
import { TypeOfAccount } from '../../types';
import { Typography } from '@mui/material';
import { MedicalInformation } from '@mui/icons-material';

export default function DashboardTile( props: { type: string, url: string, personId?: string, role?: TypeOfAccount } ) {
  return (
    <>
      <Card className="card">
        <CardContent>
          <Typography variant="h5">
            {props.type}
          </Typography>
        </CardContent>
        <CardAction>
          <Typography variant="h6">
            <Link to={props.url} state={{personId: props.personId, role: props.role}}>View {props.type}</Link>
          </Typography>
          <MedicalInformation />
        </CardAction>
      </Card>
    </>
  )
}

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardAction from '@mui/material/CardActionArea'
import { Link } from 'react-router-dom';

export default function DashboardTile( props: { type: string, url: string, personId?: string } ) {

  return (
    <>
      <Card className="card">
        <CardContent>{props.type}</CardContent>
        <CardAction>
          <Link to={props.url} state={{personId: props.personId}}>View {props.type}</Link>
        </CardAction>
      </Card>
    </>
  )
}

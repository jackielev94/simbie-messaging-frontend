import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardAction from '@mui/material/CardActionArea'

export default function DashboardTile( { type, url } ) {

  return (
    <>
      <Card className="card">
        <CardContent>{type}</CardContent>
        <CardAction>
          <a href={url}>View {type}</a>
        </CardAction>
      </Card>
    </>
  )
}

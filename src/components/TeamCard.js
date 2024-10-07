import {Card , CardContent , Typography} from '@mui/material'

const TeamCard = ({team}) => {
    <Card>
        <CardContent>
        <Typography variant = 'h5'>{team.full_name || 'no name'}</Typography>
        <Typography>{team.city}</Typography>
    
        <Typography>{team.abbreviation}</Typography> 

        </CardContent>
    </Card>
}

export default TeamCard;
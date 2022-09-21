import React from 'react'
import Card from 'react-bootstrap/Card';


const variants = {
    grass:'#54BC7D',
    fire:'#E35B40',
    water:'#6FA1F6',
    bug:'#77E3D1',
    normal:'#D2E1DE',
    poison:'#AD65BF',
    electric:'#EFF4A0',
    ground:'#A48F6F'

}
// const variants = {
//     grass:'success',
//     fire:'danger',
//     water:'primary',
//     bug:'info',
//     normal:'light',
//     poison:'dark',
//     electric:'warning',
//     ground:'secondary'

// }


const PokemonThumbnail = ({ id, name, image, type }) => {
    let colors = {bg:variants[type], fg:type === 'poison' ? 'light' : 'dark'} 

    return (

        <Card style={{ width: '17rem', height: '25rem', backgroundColor: colors.bg}} text={colors.fg}>
        <Card.Img style={{height:'18rem', width:'17rem', position:'center'}} variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <small>#{id}</small>
            <p>Type: {type}</p>
          </Card.Text>
        </Card.Body>
      </Card>


    )
}

export default PokemonThumbnail
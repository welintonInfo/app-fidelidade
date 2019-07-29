import React from 'react'
import { Text, Image, Dimensions } from 'react-native'
import ImagePicker from 'react-native-image-picker'
import Icon from 'react-native-vector-icons/AntDesign'
import { Input } from 'react-native-elements'

import { Container, List, LogoContent, LogoEditButton } from './styles'
import Prizes from '~/components/Prizes'

const prizesData = [
  {
    id: 1,
    name: 'Premio 1',
    description: 'Descricao do premio 1',
    pontuation: 250
  },
  {
    id: 2,
    name: 'Premio 2',
    description: 'Descricao do premio 2',
    pontuation: 200
  },
  {
    id: 3,
    name: 'Premio 3',
    description: 'Descricao do premio 3',
    pontuation: 150
  },
]

const imageWidth = Dimensions.get('window').width

const options = {
  title: 'Selecionar Logo',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
}


export default class UserCompanyInfo extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      avatarSource: 'https://picsum.photos/id/950/800/300'
    }
  }

  async changeImage() {
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);
    
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        console.log(response)
        const source = { uri: response.uri };
    
        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };
    
        this.setState({
          avatarSource: response.uri,
        });
      }
    })
  }
  

  render() {    
    return (
      <Container>

        <LogoContent>
          <Image
            style={{ 
              width: imageWidth, height: 150, alignItems: 'center',
              justifyContent: 'center'
            }}
            source={{
              uri: this.state.avatarSource,
            }}
          />

          <LogoEditButton>
            <Icon 
              name="edit"
              size={30}
              onPress={() => this.changeImage() }
            />
          </LogoEditButton>          
        </LogoContent>

        <Input
          placeholder="Nome Empresa" 
        />
        <Input
          placeholder="Endereço" 
        />
        <Input
          placeholder="Categoria" 
        />
        <Input
          placeholder="Horario de funcionamento" 
        />

        <Text>Pontuação</Text>
        <Input
          placeholder="Porcentagem"
          keyboardType={'numeric'} 
        />

        <Text>Premios</Text>
        <List
            keyboardShouldPersistTaps="handled"
            data={prizesData}
            keyExtractor={item => String(item.id)}
            onPress={ () => console.log('clicou')}
            renderItem={({ item }) => (
              <Prizes data={item} pontuation={200} editing={true} />          
            )}
        />
      </Container>
    )
  }
}

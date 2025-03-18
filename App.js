import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  TextInput
} from 'react-native';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      precoalcool:"",
      precogasolina:"",
      resultado: null,
    } ;

    }

    calcularMelhorOpcao = () => {
      const { precoalcool, precogasolina } = this.state;
  
      // Verifica se os valores não são vazios e se são números válidos
      if (precoalcool && precogasolina) {
        const precoAlcool = parseFloat(precoalcool);
        const precoGasolina = parseFloat(precogasolina);
  
        // Verifica se os valores são números válidos
        if (!isNaN(precoAlcool) && !isNaN(precoGasolina) && precoGasolina !== 0) {
          const resultado = precoAlcool / precoGasolina;
  
          // Se o resultado for menor que 0.7, álcool é mais vantajoso
          this.setState({ 
            resultado: resultado < 0.7 ? 'Álcool é mais vantajoso!' : 'Gasolina é mais vantajosa!'
          });
        } else {
          this.setState({ resultado: 'Valores inválidos. Verifique os preços.' });
        }
      } else {
        this.setState({ resultado: 'Preencha ambos os campos de preço.' });
      }
    };
  
  render() {
    return (
      <View style={styles.container}>
        
      <View  style={styles.logo}>
        <Image
         source={require('./src/img/logo.png')}
         style={styles.img}
        />
        <Text style={styles.intro}> Qual a melhor opção? </Text>
      </View>

      <View style={styles.preco}>

        <Text style={styles.textopreco}> Álcool (preço por litro): </Text>
        <TextInput style={styles.input}
        placeholder='Digite o preço'
        placeholderTextColor={'#888888'}
        onChangeText={(texto) => this.setState({ precoalcool: texto })} // Atualiza o estado ao digitar
       />

        <Text style={styles.textopreco}> Gasolina (preço por litro): </Text>
        <TextInput style={styles.input}
        placeholder='Digite o preço'
        placeholderTextColor={'#888888'}
        onChangeText={(texto) => this.setState({ precogasolina: texto })} // Atualiza o estado ao digitar
        />

        <TouchableOpacity style={styles.button}  onPress={this.calcularMelhorOpcao}>
        <Text style={styles.buttonText}>Calcular</Text>
        </TouchableOpacity>

        {this.state.resultado && (
            <Text style={styles.resultado}>{this.state.resultado}</Text>
          )}


      </View>


      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'space-between',

  },

  logo:{
    justifyContent: 'space-between',
    alignItems: 'center', 

  },

  img:{
    width:200,
    height:200,
    marginTop:100,
    alignItems:'center',

  },

  intro:{
    color:'#FFFFFF',
    paddingTop:30,
    fontSize:30,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  
  preco:{
    paddingBottom:170,
    width: '100%', 
    margin:50,
  
  },

  textopreco:{
    color:'#FFFFFF',
    fontSize:15,
    fontWeight: 'bold',
    paddingLeft:10,

  },

  input:{
    height:40,
    width:'100$',
    backgroundColor:'#FFFFFF',
    fontSize:15,
    padding:10,
    margin:10,
    textAlign:'left',
    borderRadius:5,
    
  },

  button: {
    backgroundColor: '#FF0000',  // Cor do botão
    paddingVertical: 12,          // Espaço vertical no botão
    paddingHorizontal: 30,        // Espaço horizontal no botão
    borderRadius: 5, 
    margin:10, 

  },
  buttonText: {
    color: '#fff',               // Cor do texto
    fontSize: 18,                // Tamanho da fonte
    textAlign: 'center',         // Alinhamento centralizado
  },
  resultado: {
    color: '#FFFFFF',
    fontSize: 18,
    marginTop: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  
});

export default App;
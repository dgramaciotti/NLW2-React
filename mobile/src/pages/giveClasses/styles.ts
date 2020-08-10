import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#8257E5',
        justifyContent:'center',
        padding: 40
    },
    content:{
        flex:1,
        justifyContent:'center'
    },
    title:{
        fontFamily:'Archivo_700Bold',
        color:'#FFF',
        fontSize:30,
        maxWidth:160,
        lineHeight:40
    },
    description:{
        fontFamily:'Poppins_400Regular',
        color:'#d4c2ff',
        marginTop:20,
        lineHeight:25,
        fontSize:15,
        maxWidth:240
    },
    button:{
        width:'100%',
        marginVertical:40,
        backgroundColor:'#04d361',
        height:58,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:0
    },
    buttonText:{
        color:'#FFF',
        fontFamily:'Archivo_700Bold',
        fontSize:16
    }
})
export default Styles;
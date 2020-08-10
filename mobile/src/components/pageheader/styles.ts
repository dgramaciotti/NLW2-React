import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
    container:{
        padding:40,
        backgroundColor:'#8257e5',
    },
    icons:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    title:{
        fontFamily:'Archivo_700Bold',
        color:'#FFF',
        fontSize:24,
        lineHeight:32,
        maxWidth:160,
        marginVertical:30
    },
    subtitle:{
        fontFamily:'Poppins_400Regular',
        color:'#d4c2ff',
        marginTop:5,
        lineHeight:25,
        fontSize:15,
        maxWidth:240
    },
    headerText:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    }
})
export default Styles;
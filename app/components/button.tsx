import { StyleSheet, View, Pressable, Text} from 'react-native';
import { FontAwesome } from '@expo/vector-icons/';

type Props = {
    label: string;
    theme?: 'primary';
    onPress?: () => void;
  };
  
export default function Button({label, theme, onPress } : Props){
    if(theme == 'primary')
    {
        return (
            <View style={[styles.buttonContainer, {borderWidth: 4,borderColor: '#15bb56', borderRadius: 5},]}>
                <Pressable style={styles.button} onPress={onPress}>
                    <FontAwesome name='picture-o' size={18} color="15bb56" style={styles.buttonIcon}/>
                    <Text style={styles.buttonLabel}>{label}</Text>
                </Pressable>
            </View>
            
        );
    }
    else{
        return (
            <View style={styles.buttonContainer}>
                <Pressable style={styles.button} onPress={onPress}>
                    <Text style={styles.buttonLabel}>{label}</Text>
                </Pressable>
            </View>
            
        );
    }

}

const styles = StyleSheet.create({
    buttonContainer: {
        width: 310,
        height: 60,
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
        backgroundColor: '#33ff83',
        borderRadius: 10,
        marginBottom: 10,
    },

    button: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },

    buttonLabel: {
        color: '#111',
        fontSize: 16,
    },

    buttonIcon: {
        paddingRight: 8,
    },
});
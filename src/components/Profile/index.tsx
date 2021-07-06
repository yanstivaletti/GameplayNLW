import React from 'react';
import { View,Text,Alert } from 'react-native';
import { styles } from './styles';
import { Avatar } from '../Avatar';
import { useAuth } from '../../hooks/auth';
import { RectButton } from 'react-native-gesture-handler';
import { sin } from 'react-native-reanimated';

export function Profile() {
    const { user ,singOut} = useAuth();
    function handleSignOut(){
        Alert.alert('Logout', 'Deseja Sair do GamePlay?',
        [
            {
                text: 'Não',
                style: 'cancel'
            },
            {
                text: 'Sim',
                onPress: () => singOut()
            }
        ])
    }
 
    return(
        <View style = {styles.container}>
            <RectButton onPress = {handleSignOut}>
            <Avatar urlImage = {user.avatar}/>
            </RectButton>
            <View>
                <View style = {styles.user}>
                    <Text style = {styles.greeting}> 
                        Olá,
                    </Text>
                    <Text style = {styles.username}>
                        {user.firstName}
                    </Text>
                </View>
            <Text style = {styles.message}>
              Só mais um dia de Luta!
            </Text>
            </View>
        </View>
    )
}
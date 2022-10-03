import React from 'react';
import '../styles.css';
import medOne from '../images/usman-yousaf-xM8fR-OGtHY-unsplash.jpg';


const App = () => {
    
    const outframe = {
        margin: 'auto', 
        width: 768, 
        backgroundColor: '#EEE', 
        padding:12, 
        borderRadius: 8, 
        border:'1px solid #050505',
        textAlign: 'center'};
    const medName = {
        med1: 'João da Silveira',
        med2: 'Lúcia Oliveira',
        med3: 'Ewrton Rodrigues'
    }
    const photo = process.env.REACT_APP_FOTO;
    return <div style={outframe}>
            
            <h1>Profissionais de saúde</h1>  
            
            <div style={{
                margin: 'auto', 
                backgroundColor: '#EEE', 
                padding:12, 
                borderRadius: 12,
                border: '1px solid #DEDEDE',
                alignItems: 'center',
                
                }}>
                    <div className='medicos'>
                    <img src={medOne} width='180px' height='150' borderRadius='12' alt={medName.med1}/>
                    <p>{medName.med1}</p>
                    </div>
                    <div className='medicos'>
                    <img src={photo} width='180px' height='150'  borderRadius='12' alt={medName.med2}/>
                    <p>{medName.med2}</p>
                    </div>
                    <div className='medicos'>
                    <img src={'https://images.unsplash.com/photo-1610629457102-10648867ca5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'} 
                    width='130px' height='150px'  borderRadius='12px'  borderColor='#E4DDED' alt={medName.med3}/>
                    <p>{medName.med3}</p>
                    </div>
            </div>
        </div>
    
}
export default App

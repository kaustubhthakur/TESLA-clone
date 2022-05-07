import React from 'react'
import styled from 'styled-components'
import Section from './Section'
function Home() {
  return (
    <Container>
        <Section
        title=" Model 3"
        description="order Online for Touchless Delivery"
        backgroundImg="model-3.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
        />
        <Section
        title =" model S"
        description="order online for touchless Delivery"
        backgroundImg="model-s.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
        />
        <Section
        title=" Model Y"
        description="order Online for Touchless Delivery"
        backgroundImg="model-y.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
        />
        <Section
        title =" model X"
        description="order online for touchless Delivery"
        backgroundImg="model-x.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
        />
        <Section
        
        title ="lowest cost solar panel"
        description="Trust the Technology"
        backgroundImg="solar-panel.jpg"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
        />

         <Section
        
        title ="lowest cost solar roof"
        description="Trust the Technology"
        backgroundImg="solar-roof.jpg"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
        /> <Section
        
        title ="Accessories"
        description="Trust the Technology"
        backgroundImg="accessories.jpg"
        leftBtnText="Order Now"
       
        /> 

       
    
    </Container>
  )
}

export default Home
const Container = styled.div`
height:100vh;
text-align:center;
`
<template>
        <v-container fluid class="container">
            <div class="header">
                <v-row class="justify-center pa-6">
                <v-col>
                    <v-img
                    class="align-center float-start animate__animated animate__backInLeft"
                    width="200"
                    src="../../public/assets/logoSB.png"
                    ></v-img>
                    
                </v-col>
                <v-col>
                    <v-img
                    class="tsyp text-center animate__animated animate__backInDown"
                    width="400"
                    src="../../public/assets/logoTSYP.jpg"
                    ></v-img>
                </v-col>
                <v-col>
                   
                    <v-img
                    class="align-center pt-16 float-end animate__animated animate__backInRight"
                    width="200"
                    src="../../public/assets/logoIASpng.png"
                    ></v-img>
                </v-col>
                </v-row>

                <div class="text mb-15">
                    <div class="child animate__animated animate__jackInTheBox"><span class="" style="color: #A7D397 !important;font-size: 45px !important;">Success</span>{{ text }}</div> 
                </div>

            </div>

            <div class="solutions mt-15">
                <h1>Solution</h1>
            </div>
            
        </v-container>
        <!-- <div class="btn">
                <v-btn size="x-large">Dashboard</v-btn>
            </div> -->
</template>
<script>
import 'animate.css';
export default {
    data(){
        return {
            text:" is not found in the value of possessed things, but rather in the value of things that possess us."
        }
    
    }
}

</script>
<style scoped>
:root {
  --animate-duration: 2s;
  --animate-delay: 0.9s;
}
.container{
    background-color: #161A30;
    height: 100%;
}
.btn{
  margin-top: 250px;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  letter-spacing: 1.5px;
  text-align: center;
}
.text {
  font-family: comic;
  font-size: 40px;
  margin: 25px;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  letter-spacing: 1.5px;
  text-align: center;
}

.child {
  width: 600px;
  height: auto;
  color: #F0ECE5;
  font-weight: bold;
}

</style>
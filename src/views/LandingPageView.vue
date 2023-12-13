<template>
    <main>
        <div class="header">
        <!--Content before waves-->
        <div class="inner-header flex">
            <div class="text mb-15 mt-5">
                <div class="child animate__animated animate__jackInTheBox"><span class="" style="color: #EBEF95 !important;font-size: 45px !important;">Success</span>{{ text }} <br> <span style="font-size: 25px;color: #EFB495;">"Albert Einstein"</span> <br> <router-link to="/dashboard"><v-btn outlined class="mt-4" color="#F3F8FF">Go To Dashboard</v-btn></router-link></div> 
            </div>
        </div>

        <!--Waves Container-->
        <div>
            <svg
            class="waves"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
            shape-rendering="auto"
            >
            <defs>
                <path
                id="gentle-wave"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                />
            </defs>
            <g class="parallax">
                <use
                xlink:href="#gentle-wave"
                x="48"
                y="0"
                fill="rgba(255,255,255,0.7"
                />
                <use
                xlink:href="#gentle-wave"
                x="48"
                y="3"
                fill="rgba(255,255,255,0.5)"
                />
                <use
                xlink:href="#gentle-wave"
                x="48"
                y="5"
                fill="rgba(255,255,255,0.3)"
                />
                <use xlink:href="#gentle-wave" x="48" y="7" fill="#fff" />
            </g>
            </svg>
        </div>
        <!--Waves end-->
        </div>

        <div class="main">
            <h1 class="title1 text-center mb-5">CAS Challenge</h1>
            <h2 class="title2 text-center mb-5">trash bin</h2>
            <v-container fluid class="container">
                
                <v-row class="justify-center mt-4">
                <v-col class="d-flex justify-center">
                    <v-img
                    class=""
                    width="250"
                    height="300"
                    src="../../public/assets/logoSB.png"
                    ></v-img>
                    
                </v-col>
                <v-col class="d-flex justify-center">
                    <v-img
                    class="tsyp"
                    width="450"
                    height="300"
                    src="../../public/assets/logoTSYP.jpg"
                    ></v-img>
                </v-col>
                <v-col class="d-flex justify-center">
                
                    <v-img
                    class="align-center mt-16"
                    width="250"
                    height="200"
                    src="../../public/assets/logoIASpng.png"
                    ></v-img>
                </v-col>
                </v-row>
            </v-container>

            <h1 class="title1 text-center">solution</h1>
            <div class="text mb-15" style="margin-bottom: 200px;">
                <div class="child2 title3">Our project is a smart bin that allows us to produce electricity, biogas and natural fertilizers.</div> 
            </div>

            <div class="solution mt-5">
                <v-row class="mt-10">
                    <v-col  class="d-flex justify-center">

                        <v-img
                        class="align-center float-start animate__animated animate__backInLeft"
                        width="250"
                        height="300"
                        src="../../public/assets/sol1.png"
                        ></v-img>

                    </v-col>

                    <v-col class="d-flex justify-center">
                        <v-img
                        class="align-center float-start animate__animated animate__backInLeft"
                        width="250"
                        height="300"
                        src="../../public/assets/sol2.png"
                        ></v-img>
                    </v-col>
                    <v-col class="d-flex justify-center">
                        <v-img
                        class="align-center float-start animate__animated animate__backInLeft"
                        width="250"
                        height="300"
                        src="../../public/assets/sol3.png"
                        ></v-img>
                    </v-col>
                    <v-col class="d-flex justify-center">
                        <v-img
                        class="align-center float-start animate__animated animate__backInLeft"
                        width="250"
                        height="300"
                        src="../../public/assets/sol4.png"
                        ></v-img>
                    </v-col>
                </v-row>
            </div>

            <div class="benefits mt-8">
                <h1 class="title1 text-center mb-5 mt-10">benefits</h1>

                <v-container>
                    <div class="elements  align-center mb-10">
                    <v-row class="mt-8 d-flex justify-lg-space-around wrap">
                    <v-col d-flex justify-center class="v-col-12 v-col-sm-6 v-col-md-6 v-col-xl-4 v-col-lg-4 " >
                        <div class="card-img" style="width: 100%;">
                            <v-img 
                            src="../../public/assets/biogas.png" alt="Avatar" class="image mt-md-4 mt-sm-4"
                           
                            >
                            </v-img>
                            <div class="overlay">
                                <div class="text1">Biogas</div>
                            </div>
                        </div>
                    </v-col>
                    <v-col d-flex justify-center class="v-col-12 v-col-sm-6 v-col-md-6 v-col-xl-4 v-col-lg-4 mt-md-4 mt-sm-4" >
                        <div class="card-img" style="width: 100%;">
                            <v-img src="../../public/assets/electricite.png" 
                             alt="Avatar" class="image mt-md-4 mt-sm-4"></v-img>
                            <div class="overlay">
                                <div class="text1">Electricity</div>
                            </div>
                        </div>
                    </v-col>
                    <v-col d-flex justify-center class="v-col-12 v-col-sm-6 v-col-md-6 v-col-xl-4 v-col-lg-4 mt-md-4 mt-sm-4" >
                        <div class="card-img" style="width: 100%;">
                            <v-img src="../../public/assets/plante.png"
                             alt="Avatar" class="image mt-md-4 mt-sm-4"></v-img>
                            <div class="overlay">
                                <div class="text1">fertilizers</div>
                            </div>
                        </div>
                    </v-col>
                    </v-row>
                </div> 
                </v-container>
               
            </div>
        </div>
    </main>
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
.title1{
    font-family: comic sans;
    font-size: 60px;
    margin-top: 40px;
    text-transform: uppercase;
    color: #053B50;
    text-shadow: -1px -1px 1px rgba(255,255,255,.1), 1px 1px 1px rgba(0,0,0,.5);
}
.mt-10 {
    margin-top: 167px !important;
}
.main{
    overflow: hidden;
    box-sizing: border-box;
}
.solution{
    margin-top: 500px;
}
.title2{
    font-family: comic sans;
    font-size: 40px;
    text-transform: uppercase;
    color: #176B87;
    background: #fff;
    letter-spacing: .1em;
    text-shadow: -1px -1px 1px rgba(255,255,255,.1), 1px 1px 1px rgba(0,0,0,.5);
}

.title3{
    font-family: comic sans;
    font-size: 25px;
    text-transform: capitalize;
    color: #176B87;
    background: #fff;
    letter-spacing: .1em;

}
.child2{
    width: 900px;
    height: auto;
    color: #176B87;
    font-weight: bold;
    margin: 0px 20px 0px 20px;
}
.container{ 
    margin-top: 90px;
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
  font-family: comic sans;
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

/**************************************** *************************************************/

.header {
  position: relative;
  text-align: center;
  background: linear-gradient(
    60deg,
    #053B50 0%,
    #64CCC5 100%
  );
  color: white;
}
.logo {
  width: 50px;
  fill: white;
  padding-right: 15px;
  display: inline-block;
  vertical-align: middle;
}

.inner-header {
  height: 65vh;
  width: 100%;
  margin: 0;
  padding: 0;
}

.flex {
  /*Flexbox for containers*/
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.waves {
  position: relative;
  width: 100%;
  height: 15vh;
  margin-bottom: -7px;
  /*Fix for safari gap*/
  min-height: 100px;
  max-height: 150px;
}

.content {
  position: relative;
  height: 20vh;
  text-align: center;
  background-color: white;
}

/* Animation */

.parallax > use {
  animation: move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
}

.parallax > use:nth-child(1) {
  animation-delay: -2s;
  animation-duration: 7s;
}

.parallax > use:nth-child(2) {
  animation-delay: -3s;
  animation-duration: 10s;
}

.parallax > use:nth-child(3) {
  animation-delay: -4s;
  animation-duration: 13s;
}

.parallax > use:nth-child(4) {
  animation-delay: -5s;
  animation-duration: 20s;
}

@keyframes move-forever {
  0% {
    transform: translate3d(-90px, 0, 0);
  }

  100% {
    transform: translate3d(85px, 0, 0);
  }
}

/* /* Shrinking for mobile */
@media (max-width: 768px) {
  .waves {
    height: 40px;
    min-height: 40px;
  }

  .content {
    height: 30vh;
  }

  h1 {
    font-size: 24px;
  }
}

/*************************************image hover effect****************/

.card-img {
  position: relative;
  width: 50%;
  border-radius: 15px;
}

.image {
  display: block;
  width: 100%;
  height: 200px;
  border-radius: 15px;
}

.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 20px;
  right: 20px;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: .5s ease;
  background-color: #F1EAFF;
  border-radius: 40px;

}

.card-img:hover .overlay {
  opacity: 1.5;
}

.text1 {
  color: #363062;   
  font-size: 30px;
 text-transform: uppercase;
 letter-spacing: 1.5px;
 font-family: comic sans;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
}
</style>
<template>
    <div class='comment'>
    <h1>{{com}}</h1>
    </div>
</template>
<script>
export default {
    name:"Comments",
     props: {
    com: String
  },
  
    data () 
    {
       return {
           message :'texte saisi :',
           saisie :''
       }
    },


    filters: 
    {
        ajoute : function (valeur,saisie){
            return valeur+saisie;
        }
    }
}

</script>
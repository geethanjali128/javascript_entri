let total_cost=0
function solve(meal_cost, tip_percent, tax_percent) {
    
    
    let tip=(meal_cost/100)*tip_percent
    let tax=(tax_percent/100)*meal_cost
    total_cost+=meal_cost+tip+tax
   console.log(~~total_cost)
    

}
solve(12,20,8)

let dec=(4.0+4.0).toFixed(1)
console.log(dec)
function getGrade(score) {
    let grade;
  
    if(score>80&&score<=90){
        grade="A"
    }else if(score>70&&score<=80){
        grade="B"
    }else if(score>60&&score<=70){
        grade="C"
    }else if(score>50&&score<=60){
        grade="D"
    }else if(score>30&&score<=50){
        grade="E"
    }else{
        grade="F"
    }
    return grade;
}
console.log(getGrade(50))
//   we can store "stings"in an array  
  const members=["rakesh","rajesh","ramesh"]
  console.log(members)
// //   we can store "numbers" in an array 
  const age=[25,22,20,45,34]
  console.log(age)
// //   we can store "combination of 'strings 'and 'numbers' "at the same time in an array 
  const data=[ "rakesh",25,"rajesh","suresh",45]
  console.log(data)

 
  console.log(members[0].toUpperCase())
  console.log(members[1])
  console.log(members[2])
  console.log(members[1][2])
  console.log(members[0][0])
members[0]="rohith"
members[3]="sai"
members[2]="anjali"
console.log(members)
console.log(members[1][3])



  members.push("geetha")
  console.log(members)
members.pop()
members.pop()
console.log(members)
members.unshift("anjali")
console.log(members)
members.shift()
console.log(members)

// to aad a element from last -".push()""
const members1=["ramana","raju","ramu"]
members.push("sirisha")
console.log(members)

// to remove a element from last - ".pop()"
const members2=["rakesh","rajesh","ramesh"]
members.pop()
console.log(members)

// to add a element from front -".unshift()"
const members3=["rakesh","rajesh","ramesh"]
members.unshift("meghana")
console.log(members)

/// to remove a element from front -".shift()"
const members4=["rakesh","rajesh","ramesh"]
members.shift()
console.log(members)

// adding elements to an empty arry
const data1=[]
console.log(data1)
data1[0]="rohith"
console.log(data1)
data1.push("meghana")
console.log(data1)
data1.push("jyothi")
console.log(data1)

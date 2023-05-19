
// Result calculation

export const result=(questionSet,answers)=>{
    // const questionSet = []
    // const answers = []
    // const correct_answers=[]
    let marks=0
    let total=0
    
    questionSet.forEach((question,index)=>{
        total++
        if(question.answer===answers[index])  marks++
    })
    return {marks,total}
}
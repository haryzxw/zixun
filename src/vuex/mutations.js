export const changeSelArr= (state,payload) => {//将参数mes赋值给state的变量subjectid 
	state.selectArr=payload.selectArr;
}
export const changePleObj= (state,payload) => {//将参数mes赋值给state的变量subjectid 
	state.peopleObj.value=payload.peopleObj.value;
	state.peopleObj.i=payload.peopleObj.i;
}
export const changeArtObj= (state,payload) => {//将参数mes赋值给state的变量subjectid 
	state.articleObj.value=payload.articleObj.value;
	state.articleObj.i=payload.articleObj.i;
}
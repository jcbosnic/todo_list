import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	width: 100%;
`

export const ListUsers = styled.ul`
	display: flex;
	flex-direction: column;
	width: 100%;
`

export const Title = styled.h3`
	font-size: 16px;
	font-weight: bold;
	color: #333333;
`

export const ListItem = styled.div`
	display: flex;
	flex-direction: column;
	padding: 20px 0 0;
	width: 100%;
`

export const ListData = styled.ul`
	align-items: center;
	background: #F0F0F0;
	border-radius: 10px;
	border-top: 2px solid #FFFFFF;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	padding: 5px 0;
	width: 100%;

	&:hover{
		background: #e6e6e6;
	}
`

export const ListDataList = styled.li`
	font-size: 14px;
	font-weight: bold;
`

export const ListAction = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	width: 250px;
`

export const ButtonEdition = styled.button`
	align-items: center;
	background: #FA6B62;
	border: none;
	border-radius: 25px;
	color: white;
	cursor: pointer;
	display: flex;
	font-family: Arial, Helvetica, sans-serif;
	font-weight: bold;
	height: 35px;
	justify-content: center;
	width: 100px;

	&:hover{
		background: #f71808;
	}
`

export const ListDataItem = styled.p`
	font-size: 14px;
`

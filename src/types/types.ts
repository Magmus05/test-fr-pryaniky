export interface IData {
	companySigDate:string,
	companySignatureName:string,
	documentName:string,
	documentStatus:string,
	documentType:string,
	employeeNumber:string,
	employeeSigDate:string,
	employeeSignatureName:string,
	id:string,
}
export interface IAddData {
  token: string | null,
  data: IData[]
}

export interface IinfotooltipSlice {
  isOpen: boolean;
  title: string;
  name: string;
}
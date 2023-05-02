

export interface Props {
    message: String,
    variant?: 'success' | 'warning' | 'alert' | 'info';
}

const Alert = ({message, variant=`info`}: Props) => {

  const styling: any = buttonClasses.find(classes =>{
    return classes.name === variant
  })

  return (
    <div className={`p-4 border rounded ${styling.style}`} role="alert">
        <p className="text-2xl text-gree">{`${message}`}</p>
    </div>
  )
}

export default Alert


interface MyButton{
  name: String,
  style: String
}

const buttonClasses : Array<MyButton> = [
  {name:'success', style:'text-green-700 rounded border-green-900/10 bg-green-50'},
  {name:'warning', style:'text-amber-700 rounded border-amber-900/10 bg-amber-50'},
  {name:'alert', style:'text-red-700 rounded border-red-900/10 bg-red-50'},
  {name:'info', style:'text-sky-700 rounded border-sky-900/10 bg-sky-50'},
]
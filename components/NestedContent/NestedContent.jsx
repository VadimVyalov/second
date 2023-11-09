
const NestedContent=({t,nested='',className=''})=>{
  return( 
  t.rich(nested, {
    accent: (chunks) => (
      <span className={`${className}`}>{chunks}</span>
    )
  }) )
}

export default NestedContent
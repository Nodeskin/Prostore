import {cn} from '@/lib/utils'
import { formatNaira } from '@/lib/cart'

const ProductPrice = ({value, className}:{value:number; className?:string}) => {
    return (
    <p className={cn('text-2xl', className)}>
        {formatNaira(value)}
    </p>
  )
}

export default ProductPrice

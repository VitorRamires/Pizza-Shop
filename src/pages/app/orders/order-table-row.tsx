import { ArrowRight, Search, X } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { TableCell, TableRow } from '@/components/ui/table'

export function OrdersRow() {
  return (
    <>
      <TableRow>
        <TableCell>
          <Button variant="outline" size="sm">
            <Search className="h-3 w-3" />
            <span className="sr-only">Detalhes do pedido</span>
          </Button>
        </TableCell>
        <TableCell className="font-mono text-sm font-medium">
          1231312312312
        </TableCell>
        <TableCell className="font-medium text-muted-foreground">
          Há 15 minutos
        </TableCell>
        <TableCell>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-slate-400"></span>
            <span className="font-medium text-muted-foreground">Pendente</span>
          </div>
        </TableCell>
        <TableCell className="font-medium">Cliente da loja</TableCell>
        <TableCell className="font-medium">R$ 149,90</TableCell>
        <TableCell>
          <Button variant="ghost">
            <X className="mr-2 h-3 w-3" />
            Cancelar
          </Button>
        </TableCell>
        <TableCell>
          <Button variant="ghost">
            <ArrowRight className="mr-2 h-3 w-3" />
            Aprovar
          </Button>
        </TableCell>
      </TableRow>
    </>
  )
}

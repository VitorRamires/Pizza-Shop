/* eslint-disable simple-import-sort/imports */
/* eslint-disable prettier/prettier */
import { DialogContent, DialogHeader } from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";

export function OrderDetails() {
  return (
    <>
      <DialogContent>
        <DialogTitle>Pedido: 1442</DialogTitle>
        <DialogDescription>Detalhes do pedido</DialogDescription>
        <DialogHeader>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell className="text-muted-foreground">Status</TableCell>
                <TableCell className="flex justify-end">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-slate-400"></span>
                    <span className="font-medium text-muted-foreground">
                      Pendente
                    </span>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-muted-foreground">Cliente</TableCell>
                <TableCell className="flex justify-end">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-muted-foreground">
                      Cliente da loja
                    </span>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-muted-foreground">
                  Telefone
                </TableCell>
                <TableCell className="flex justify-end">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-muted-foreground">
                      999999999
                    </span>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-muted-foreground">Email</TableCell>
                <TableCell className="flex justify-end">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-muted-foreground">
                      email@hotmail.com
                    </span>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-muted-foreground">
                  Realizado há
                </TableCell>
                <TableCell className="flex justify-end">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-muted-foreground">
                      15 minutos atrás
                    </span>
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <Table className="mt-5">
            <TableHeader>
              <TableRow>
                <TableHead>Produto</TableHead>
                <TableHead>Qnt</TableHead>
                <TableHead>Preço</TableHead>
                <TableHead>subtotal</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Pizza Grande</TableCell>
                <TableCell>2</TableCell>
                <TableCell>50 R$</TableCell>
                <TableCell>100 R$</TableCell>
              </TableRow>
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={3}>Total do pedido</TableCell>
                <TableCell>100 R$</TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </DialogHeader>
      </DialogContent>
    </>
  );
}

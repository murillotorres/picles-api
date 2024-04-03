export interface IUseCase<Input, Output> {
    // Promise: promeça de algo que será entregue. 
    run(input: Input): Promise<Output>
}
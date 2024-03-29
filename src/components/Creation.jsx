import { getCropContractForFarmer, getDefaultAccount } from '../ethereum/utils';
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();
function Creation() {
    const notify = () => toast("Request Created", { position: toast.POSITION.BOTTOM_LEFT });
    const { register, handleSubmit } = useForm();
    const onSubmitHook = async (data) => {
        try {
            let cropContract = await getCropContractForFarmer();
            await cropContract.methods.createRequest(data.title, data.amount, data.days).send({ from: getDefaultAccount() })
        } catch (e) {
            console.error(e)
            if (e.code === 4001) {
                alert(`User denied Signing the Transaction`);
            } else {
                alert(`Failed to do the Transaction`);
            }

        }
    }

    return (
        <div class="create">
            <form onSubmit={handleSubmit(onSubmitHook)}>
                <div class="form group">
                    <div class="container">
                        <div class="row align-items-center my-5">
                            <div class="col-lg</div>-7">
                                <div class="form-group row">
                                    <label for="Title" class="col-sm-2 col-form-label">Title</label>
                                    <input type="text" class="form-control" id="Title"
                                        placeholder="Enter the title" {...register('title')} />
                                </div>
                                <div class="form-group row">
                                    <label for="Amount" class="col-sm-2 col-form-label">Amount</label>
                                    <input type="text" class="form-control" id="Amount" placeholder="Amount in Ether" {...register('amount')} />
                                </div>
                                <div class="form-group row">
                                    <label for="Days" class="col-sm-2 col-form-label">Days</label>
                                    <input type="text" class="form-control" id="Days" placeholder="Number of Days" {...register('days')} />
                                </div>
                                <button onClick = {notify} type="submit" class="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>

        </div>


    )
}

export default Creation;
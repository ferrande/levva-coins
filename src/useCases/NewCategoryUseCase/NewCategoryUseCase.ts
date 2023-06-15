import { CategoryService } from "../../services/CategoryService/CategoryService";

import { loadCategory, loadCreateCategoryDone, loadCategoryFail } from "../../stores/CategoryStore/CategoryEvents";

import { CategoryValues, NewCategoryParams } from "../../domains/category";
import { RequestError } from "../../domains/request";


const execute = async ({ description }: NewCategoryParams): Promise<void> => {
    loadCategory();

    return CategoryService.createCategory({
        description,
    })
        .then((category: CategoryValues) => {
            loadCreateCategoryDone(category);
            // inserir algo p criar nova categoria?
        })
        .catch(({ hasError, message }: RequestError) => {
            loadCategoryFail({ hasError, message });
            throw new Error();
        });
};

const NewCategoryUseCase = {
    execute,
};

export default NewCategoryUseCase; 
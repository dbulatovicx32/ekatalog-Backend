import { Controller, UseGuards } from "@nestjs/common";
import { Crud } from "@nestjsx/crud";
import { Category } from "src/entities/category.entity";
import { CateogryService } from "src/services/category/category.service";
import { AllowToRoles } from "misc/allow.to.roles.descriptor";
import { RoleCheckerGuard } from "misc/role.checker.guard";

@Controller('api/category')
@Crud({
    model: {
        type: Category
    },
    params: {
        id: {
            field: 'categoryId',
            type: 'number',
            primary: true
        }
    },
    routes: {
        only: [
            "createOneBase",
            "createManyBase",
            "updateOneBase",
            "getManyBase",
            "getOneBase",

        ],
        createOneBase: {
            decorators: [
                UseGuards(RoleCheckerGuard),
                AllowToRoles('administrator'),
            ]
        },
        createManyBase: {
            decorators: [
                UseGuards(RoleCheckerGuard),
                AllowToRoles('administrator'),
            ]
        },
        updateOneBase: {
            decorators: [
                UseGuards(RoleCheckerGuard),
                AllowToRoles('administrator'),
            ]
        },
        getManyBase: {
            decorators: [
                UseGuards(RoleCheckerGuard),
                AllowToRoles('administrator', 'user'),
            ]
        },
        getOneBase: {
            decorators: [
                UseGuards(RoleCheckerGuard),
                AllowToRoles('administrator', 'user'),
            ]
        },


    }

})
export class CategoryController {
    constructor(
        public service: CateogryService
    ) { }
}
class UsersController < ApiController
    def get
        render json: User.all.as_json, status: 200
    end
end

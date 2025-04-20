
# install
npm i

# build
npm run build

# run dev --debug mode
npm run dev

# run 
npm run start


get patients
http://localhost:3000/api/patients/?page=1&limit=20

get patientById
http://localhost:3000/api/patients/7792223

get PatientTestByTestId
http://localhost:3000/api/patients/7792223/42916

there are patients routes,
request with filters and pagination

missing authentication JWT token Brear token....


return filters from table return object:
key and value is array of uniqe existing values,

things to do:
handle cache,
network cumminucation by web socket that triggered by cloude events,
and push to client,
build infra for mongoose?

i using MONGODB atlas, was wonder if better to use redis
please send me ip so i will open access. as many as you want.

in the script i used in mongoosh as schema and in rest i used mongodb with interface
need to choose one.

i gues in real world there were some lambda that trigger action and trigger push update to servre.

the structure of the solution is for excersice not for product,
i would build the solution with folder that can support many apps with shared enums and types,

didnt manage to create package for enums and types so there is duplicate in backend and front the same resource.

test choose jest for test rest api --> not implemant



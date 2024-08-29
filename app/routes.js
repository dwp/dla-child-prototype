//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here


router.post('/part-1/hospital/child-in-hospital', function(request, response) {

    var isInHospital = request.session.data['in-hospital']
    if (isInHospital === "yes"){
        response.redirect("/part-1/hospital/went-in-date")
    } else {
        response.redirect("/part-1/hospital/overnight-stays")
    }
})

router.post('/part-1/hospital/overnight-stays', function(request, response) {

    var hasOvernight = request.session.data['overnight-stay']
    if (hasOvernight === "yes"){
        response.redirect("/part-1/hospital/went-in-and-out")
    } else {
        response.redirect("/part-1/hospital/end-screen")
    }
})



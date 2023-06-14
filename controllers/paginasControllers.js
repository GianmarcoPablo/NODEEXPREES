import { Viaje } from "../models/Viaje.js";
import { Testimonial } from "../models/testimoniales.js";
const paginaInicio = (req,res)=>{
    res.render("inicio",{
        pagina: "Inicio"
    })
}

const paginaNosotros = (req,res)=>{
    res.render("nosotros",{
        pagina: "Nosotros"
    })
}

const paginaViajes = async(req,res)=>{
    //consultar la base de datos
    const viajes = await Viaje.findAll()
    console.log(viajes)
    res.render("viajes",{
        pagina: "Proximos viajes",
        viajes
    })
}

const paginaTestimoniales = async (req,res)=>{
    try{
        const testimoniales = await Testimonial.findAll()
        res.render("testimoniales",{
            pagina: "Testimoniales",
            testimoniales
        })
    }catch(error){
        console.log(error)
    }
}

//muestra un viaje por su slug
const paginaDetalleViaje = async (req,res)=>{
    const { slug } = req.params

    try{
        const viaje = await Viaje.findOne({where : {slug}})
        res.render("viaje",{
            pagina: "Informacion viaje",
            viaje
        })
    }catch{
        console.log(error)
    }
}



export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje
}
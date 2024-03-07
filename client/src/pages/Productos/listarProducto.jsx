import React, { useState, useEffect } from "react";

import { eliminarInformacionApi, listarInformacionApi } from "../../api/productos";
import Swal from "sweetalert2";

import { Spacer, Tooltip } from "@nextui-org/react";
import NavigateADM, { Retroceder, Titulo } from "../../components/UI/navbar/navbarAdmin";
import CardPerfil, { Texto1Card, Texto2Card } from "../../components/UI/perfil/cardInfo"
import Avatares from "../../components/UI/avatar/Avatares";
import Loader from "../../components/UI/cargando/loader";
import EditIcon from "../../components/UI/iconos/Editar";
import DeleteIcon from "../../components/UI/iconos/Eliminar";
import Acordeon from "../../components/UI/Acordeon/Acordeon";
import Footer from "../../components/UI/Footer/Footer";

function ListarProducto() {

	const [informacionA, setInformacionA] = useState([]);
	const [informacionI, setInformacionI] = useState([]);
	const [cargando, setCargando] = useState(true);
	const urlImage = process.env.REACT_APP_API_URL;

	useEffect(() => {
		const data = async () => {
			try {
				const informacionProductoA = await listarInformacionApi('productosActivos');
				const informacionProductoI = await listarInformacionApi('productosInactivos');
				setInformacionA(informacionProductoA.data);
				setInformacionI(informacionProductoI.data);
				setCargando(false);
			} catch (error) {
				console.error('Error al acceder a la informacion: ', error);
				setCargando(false);
			}
		};
		data();
	}, []);

	const eliminarProducto = async (idProduct) => {
		try {
			const result = await Swal.fire({
				title: "¿Quieres eliminar este producto?",
				icon: "warning",
				showCancelButton: true,
				confirmButtonColor: "#6977E4",
				cancelButtonColor: "#d33",
				confirmButtonText: "Eliminar"
			});
			if (result.isConfirmed) {
				await eliminarInformacionApi('productos', idProduct)
				const nuevaInformacionA = informacionA.filter((datos) => datos.idProduct !== idProduct);
				const nuevaInformacionI = informacionI.filter((datos) => datos.idProduct !== idProduct);
				setInformacionA(nuevaInformacionA)
				setInformacionI(nuevaInformacionI)

				Swal.fire({
					title: "Producto elimindao",
					icon: "success"
				});
			}
		} catch (error) {
			console.error('error al eliminar: ', error)
		}
	};

	return (
		<div>
			<NavigateADM>
				<Retroceder />
				<Titulo espacio="center" titulo="Productos" />
			</NavigateADM>
			<Spacer y={5} />
			{cargando ? (
				<Loader />
			) : (
				<div>
					{informacionA && informacionA.length > 0 ? (
						informacionA.map((datos) => (
							<div key={datos.idProduct}>

								<CardPerfil
									justifyContent={"space-between"}
									alignItems={"center"}
									key={datos.idProduct}>
									<div style={{ display: "flex", gap: "16px" }}>
										<Avatares
											src={`${urlImage}/${datos.image}`}
											radio={"full"} />
										<div style={{ display: "flex", justifyContent: "left", textAlign: "left" }}>
											<Texto1Card
												textAlign={"start"}
												texto={datos.nameProduct} />
										</div>
									</div>
									<div className="flex flex-col items-center">
										<div style={{ textAlign: "left", justifyContent: "left" }}>
											<div className="relative flex" style={{ gap: "5px" }} >
												<Texto2Card
													texto2={"PC: "} />
												<Texto2Card
													texto2={`${datos.price}`} />
											</div>
											<div style={{ display: "flex", textAlign: "left", gap: "5px" }}>
												<div>
													<Texto2Card
														texto2={"PO: "} />
												</div>
												<div>
													<Texto2Card
														texto2={`${datos.laborPrice}`} />
												</div>
											</div>
										</div>
									</div>
									<div className="relative flex items-center gap-1" style={{ justifyContent: "center" }}>
										<Tooltip content="Editar producto">
											<span className="text-lg text-default-400 cursor-pointer active:opacity-50">
												<EditIcon ruta={`/editar/producto/${datos.idProduct}`} />
											</span>
										</Tooltip>
										<Tooltip content="Eliminar producto">
											<span className="text-lg text-danger cursor-pointer active:opacity-50">
												<DeleteIcon className="iconoEliminar" eliminar={() => eliminarProducto(datos.idProduct)} />
											</span>
										</Tooltip>
									</div>
								</CardPerfil>
								<Spacer y={3} />
							</div>
						))
					) : (
						<p>No hay productos disponibles.</p>
					)}
				</div>
			)}
			<Spacer y={5} />

			<Acordeon titulo={"Productos inactivos"}>
			{cargando ? (
				<Loader />
			) : (
				<div>
					{informacionI && informacionI.length > 0 ? (
						informacionI.map((datos) => (
							<div key={datos.idProduct}>
								<CardPerfil
									justifyContent={"space-between"}
									alignItems={"center"}
									key={datos.idProduct}>
									<div style={{ display: "flex", gap: "16px" }}>
										<Avatares
											src={`${urlImage}/${datos.image}`}
											radio={"full"} />
										<div style={{ display: "flex", justifyContent: "center", textAlign: "center" }}>
											<Texto1Card
												textAlign={"start"}
												texto={datos.nameProduct} />
										</div>
									</div>
									<div className="relative flex items-center gap-1" style={{ justifyContent: "center" }}>
										<Tooltip content="Editar producto">
											<span className="text-lg text-default-400 cursor-pointer active:opacity-50">
												<EditIcon ruta={`/editar/producto/${datos.idProduct}`} />
											</span>
										</Tooltip>
										<Tooltip content="Eliminar producto">
											<span className="text-lg text-danger cursor-pointer active:opacity-50">
												<DeleteIcon className="iconoEliminar" eliminar={() => eliminarProducto(datos.idProduct)} />
											</span>
										</Tooltip>
									</div>
								</CardPerfil>
								<Spacer y={3} />
							</div>
						))
					) : (
						<p>No hay productos disponibles.</p>
					)}
				</div>
			)}
			</Acordeon>

			<Spacer y={5} />
			<Footer />
		</div>
	);
};

export default ListarProducto;
import './Swapi.css';
import {Alert, Container, Spinner} from "react-bootstrap";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {clearData, fetchSwapiData} from "../Store/actions/actionsSwapi";
import {TitleTextComponent} from "../Ui/TitleTextComponent";
import {FormInputComponent} from "./Components/FormInputComponent";
import {BtnComponent} from "./Components/BtnComponent";


export function SwapiComponent() {

    const [query, setQuery] = useState('');
    const dispatch = useDispatch();
    const {data, loading, error} = useSelector((state) => state.swapi);

    function handleLoadData() {
        if (query.trim()) dispatch(fetchSwapiData(query));
    }

    function handleClearData() {
        dispatch(clearData());
    }

    return (
        <Container className="text-center mt-4">
            <TitleTextComponent title="SWAPI"/>
            <FormInputComponent value={query} onChange={(e) => setQuery(e.target.value)} onClick={handleLoadData}/>
            <div className="mt-4">
                {loading && <Spinner animation="border" variant="secondary"/>}
                {error && <Alert variant="danger">{error}</Alert>}
                {data && !loading && (
                    <pre className="wrapper text-start">
                        {JSON.stringify(data, null, 2)}
                    </pre>
                )}
            </div>
            <div className="mt-5">
                <BtnComponent text={'Clear'} onClick={handleClearData}/>
            </div>
        </Container>
    );
}

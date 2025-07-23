import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppRoutes from './routes';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {AppRoutes.map((layout, index) => (
                    <Route key={index} element={layout.element}>
                        {layout.children?.map((route, i) => (
                            <Route key={i} path={route.path} element={route.element} />
                        ))}
                    </Route>
                ))}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
